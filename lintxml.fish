#!/usr/bin/env fish

set cdata_start (mktemp)
set cdata_end (mktemp)
printf '<![CDATA[' > $cdata_start
printf ']]>' > $cdata_end

set to_cleanup1 $cdata_start $cdata_end

ls packages/parser/test-input/* | while read -l file
	set xml_begin (mktemp -t 'begin')
	set xml_inner (mktemp -t inner)
	set xml_end (mktemp -t 'end')

	set xml_linted (mktemp -t linted)
	set xml_inner_linted (mktemp -t inner_linted)

	set to_cleanup2 $xml_begin $xml_inner $xml_end $xml_linted $xml_inner_linted

	begin
		perl -0777 -p -e 's/^.*<!\[CDATA\[(.*)\]\]>.*$/\1/gms' $file > $xml_inner
		and perl -0777 -i -p -e 's/^\s*(.+)*\s*$/\1/gms' $xml_inner
		and perl -0777 -p -e 's/<!\[CDATA\[.*$//gms' $file > $xml_begin
		and perl -0777 -p -e 's/.*\]\]>//gms' $file > $xml_end
		and xmllint --format $xml_inner > $xml_inner_linted
		and cat $xml_begin (printf '<![CDATA[' | psub) $xml_inner_linted (printf ']]>' | psub) $xml_end > $xml_linted
		and xmllint --format $xml_linted > $file
	end

	rm $to_cleanup2
end

rm $to_cleanup1
