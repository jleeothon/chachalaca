import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import FileUploadForm from '../components/file-upload-form';

function LoginLink() {
  const {user} = useUser();
  if (!user) {
    return <a href="/api/auth/login">Iniciar sesión</a>;
  }
  return null;
}

function LogoutLink() {
  const {user} = useUser();
  if (user) {
    return <a href="/api/auth/logout">Cerrar sesión</a>
  }
  return null;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chachalaca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chachalaca 🦤
        </h1>
        <LoginLink/>
        <LogoutLink/>
        <FileUploadForm/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
