import Head from 'next/head'

const Layout = ({pageName, children}) => {
  const title = `${pageName} - Grupo Residencial`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='shortcut icon' href='/grupo-residencial-fav-icon.png'/>
      </Head>
      <main className="h-full bg-slate-100 min-h-screen flex justify-center">
        <div className="bg-[#eceded] w-[768px] flex flex-col min-h-screen h-full overflow-hidden">
          {children}    
        </div>
      </main>
    </div>
  )
}

export default Layout