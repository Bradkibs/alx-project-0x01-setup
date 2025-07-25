import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-gray-100">
      {/* Header with Gradient Background */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-blue-100">@{username}</p>
          </div>
          <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-white">
            {id}
          </div>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Email</p>
            <a href={`mailto:${email}`} className="text-blue-600 hover:underline font-medium">{email}</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Phone</p>
            <a href={`tel:${phone}`} className="text-gray-800 font-medium">{phone}</a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500">Website</p>
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              {website}
            </a>
          </div>
        </div>
      </div>
      
      {/* Address Section */}
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <div className="flex items-start">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-medium text-gray-900 mb-1">Address</h3>
            <p className="text-gray-700">
              {address.street}, {address.suite}<br />
              {address.city}, {address.zipcode}
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {address.geo.lat}, {address.geo.lng}
            </div>
          </div>
        </div>
      </div>
      
      {/* Company Section */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-start">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-medium text-gray-900 mb-1">Company</h3>
            <p className="font-semibold text-gray-800">{company.name}</p>
            <p className="text-gray-600 italic text-sm mt-1">"{company.catchPhrase}"</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {company.bs.split(' ').map((tag, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;