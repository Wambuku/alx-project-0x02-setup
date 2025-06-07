import { type GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users?: UserProps[];
}

export default function UsersPage({ users = [] }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Users</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
  
      const users: UserProps[] = await res.json();
  
      return {
        props: {
          users,
        },
      };
    } catch (error) {
      console.error("Error in getStaticProps (users):", error);
      return {
        props: {
          users: [],
        },
      };
    }
  }
  
