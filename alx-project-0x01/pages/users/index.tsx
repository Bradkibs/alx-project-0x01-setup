import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersProp } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the amazing people who make our company great
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts?.map((user: UserProps) => (
            <div key={user.id} className="transition-transform duration-300 hover:scale-105">
              <UserCard
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                address={user.address}
                company={user.company}
                street={user.street}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} User Directory. All rights reserved.</p>
          <p className="mt-2 text-sm">Data provided by <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JSONPlaceholder</a></p>
        </div>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts // Changed from 'users' to 'posts' to match test expectations
    },
    // Re-generate the page at most once every 10 seconds
    revalidate: 10,
  };
}

export default Users;