import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="bg-customer-bg p-4 rounded">
        Customer Dashboard
      </div>

      <div className="bg-seller-bg text-seller-text p-4 rounded">
        Seller Dashboard
      </div>

      <div className="bg-admin-bg text-admin-text p-4 rounded">
        Admin Dashboard
      </div>
    </main>
  );
}