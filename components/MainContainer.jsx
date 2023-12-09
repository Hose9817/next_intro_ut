import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"saib.abdulla next.js " + keywords}></meta>
        <title>Next.js</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Main page" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: hotpink;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
