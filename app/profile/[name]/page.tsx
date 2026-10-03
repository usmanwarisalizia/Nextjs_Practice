type ProfilePageProps = {
    params: Promise<{ name: string }>
  };

export default async function ProfilePage({params}: ProfilePageProps) {
     const users = [
        { id: 1, name: 'John', email: 'john@example.com', bio: 'Software developer with a passion for coding.' },
        { id: 2, name: 'Jane', email: 'jane@example.com', bio: 'Product manager with experience in agile methodologies.' },
        { id: 3, name: 'Bob', email: 'bob@example.com', bio: 'Designer focused on creating intuitive user experiences.' },
      ];

      const pageParams = await params
      const username = pageParams.name;

      const user = users.find((user) => user.name.toLowerCase() === username.toLowerCase());

       

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>{user?.bio}</p>
    </div>
  )
}
