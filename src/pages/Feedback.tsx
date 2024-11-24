import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import toast from 'react-hot-toast';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    toast.success('Thank you for your feedback!');
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            How was your experience?
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-medium">Rate our service</p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={32}
                      className={`${
                        star <= (hoveredRating || rating)
                          ? 'fill-[#e0a400] text-[#e0a400]'
                          : 'text-gray-300'
                      } transition-colors duration-200`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Food Quality', 'Service', 'Cleanliness', 'Value for Money', 'Menu Variety', 'Wait Time'].map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-[#e0a400] rounded border-gray-300 focus:ring-[#e0a400]"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            {/* Feedback Text */}
            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Comments
              </label>
              <textarea
                id="feedback"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="input resize-none"
                placeholder="Tell us more about your experience..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <span>Submit Feedback</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;