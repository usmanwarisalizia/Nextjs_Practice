import FilterUsers from "@/components/FilterUsers";


export default async function page() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

  return (
    <div>
      <h1>Classroom Page</h1>
      <p>This is the classroom page of the application.</p>
       <FilterUsers users={users} />
    </div>
  )
}
