import React, { useState, useEffect } from 'react';

const OffersScrollingBanner = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const lmsApiUrl = import.meta.env.VITE_LMS_API_URL;
      // Try to include future offers if API supports it
      const url = `${lmsApiUrl}/v1/offers?displayLocation=mcl.website.banner&includeFuture=true`;
      console.log('Fetching offers from:', url);
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch offers');
      }

      const data = await response.json();
      console.log('Offers received:', data);
      console.log('Number of offers:', data?.length || 0);
      setOffers(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching offers:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Don't render if loading or error
  if (loading || error) {
    return null;
  }

  // Don't render if no offers
  if (!offers || offers.length === 0) {
    return null;
  }

  return (
    <div className="bg-black text-white py-3 overflow-hidden sticky top-0 z-50 border-b-2 border-purple-500">
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate offers for seamless loop */}
          {[...offers, ...offers].map((offer, index) => (
            <div key={`${offer.offerId}-${index}`} className="inline-flex items-center mx-12 px-4">
              <span className="text-yellow-400 mr-3 text-2xl">🎉</span>
              <span className="font-semibold">
                <span className="text-cyan-400 font-bold">{offer.programName}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-pink-400">{offer.offerType}</span>
                {offer.offerDiscount && (
                  <>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-green-400 font-bold text-lg">{offer.offerDiscount}% OFF</span>
                  </>
                )}
                {offer.couponCode && (
                  <>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-white">Code: <span className="text-yellow-400 font-bold bg-yellow-900 px-2 py-1 rounded">{offer.couponCode}</span></span>
                  </>
                )}
                {offer.offerDescription && (
                  <>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-300 text-sm">{offer.offerDescription}</span>
                  </>
                )}
                <span className="mx-3 text-gray-500">|</span>
                <a 
                  href={offer.enrollmentUrl} 
                  className="text-orange-400 underline hover:text-orange-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                </a>
                <span className="mx-2 text-gray-400">•</span>
                <a 
                  href={offer.detailUrl} 
                  className="text-green-400 underline hover:text-green-300 transition-colors font-bold"
                  onClick={(e) => e.stopPropagation()}
                >
                  Enroll Now
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          width: 100%;
        }
        
        .marquee-content {
          display: flex;
          animation: scroll 40s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }

        .marquee-content a {
          display: inline;
        }
      `}</style>
    </div>
  );
};

export default OffersScrollingBanner;
