import * as bunyan from 'bunyan';

export default bunyan.createLogger({
	name: 'chachalaca-core',
	serializers: bunyan.stdSerializers
});
