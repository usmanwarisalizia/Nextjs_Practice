type ProfilePageAgeProps = {
  params: Promise<{ name: string; age: string }>;
};
export default async function page({ params }: ProfilePageAgeProps) {
  const pageParams = await params;
  const username = pageParams.name;
  const age = pageParams.age;

  const users = [
    {
      id: 1,
      name: "John",
      email: "john.gupta@gmail.com",
      age: 25,
      bio: "Software developer with a passion for coding.",
    },
    {
      id: 1,
      name: "John",
      email: "john.sharma@gmail.com",
      age: 22,
      bio: "Software developer with a passion for coding.",
    },
    {
      id: 1,
      name: "John",
      email: "john.dev@gmail.com",
      age: 20,
      bio: "Software developer with a passion for coding.",
    },
  ];

  const user = users.find(user => user.name.toLowerCase() === username.toLowerCase() && user.age.toString() === age);

  return <>
  <div>
    <h1>{user?.name}'s Profile Page</h1>
    <p>Email: {user?.email}</p>
    <p>Age: {user?.age}</p>
    <p>Bio: {user?.bio}</p>
  </div>
  </>;
}
