import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CreditCard, ThumbsUp } from 'lucide-react';
import background from '../assets/background.jpg';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={background} alt="Food background"
            className="w-full h-full object-cover brightness-60"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Enjoyable way to access your foods
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Skip the lines, order ahead, and enjoy your meal without the wait.
              Perfect for students and staff on the go.
            </p>
            <Link to="/menu" className="btn-warning inline-flex items-center gap-2">
              Explore Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Eatsy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-[#e0a400]" />}
              title="Schedule Orders"
              description="Plan ahead and schedule your pickup time to avoid waiting in line"
            />
            <FeatureCard
              icon={<CreditCard className="w-8 h-8 text-[#e0a400]" />}
              title="Easy Payments"
              description="Secure online payments for a seamless ordering experience"
            />
            <FeatureCard
              icon={<ThumbsUp className="w-8 h-8 text-[#e0a400]" />}
              title="Quality Service"
              description="Fresh food and excellent service guaranteed every time"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e0a400]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy quick and easy ordering
            through Eatsy.
          </p>
          <Link to="/login" className="btn-secondary bg-white">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;