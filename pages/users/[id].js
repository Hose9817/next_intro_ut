import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <h1>User with id : {query.id}</h1>
      <h2>
        Name of user: <b>{user.name}</b>
      </h2>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
}
