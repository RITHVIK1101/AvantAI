import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const CardScrollSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  // Get scroll position
  const { scrollY } = useScroll({ container: containerRef });

  // Define transformations for y-position with stronger overlap effect
  const firstCardY = useTransform(scrollY, [0, containerHeight / 4], [50, -200]);
  const secondCardY = useTransform(scrollY, [containerHeight / 4, containerHeight / 2], [250, -100]);
  const thirdCardY = useTransform(scrollY, [containerHeight / 2, (3 * containerHeight) / 4], [450, 0]);
  const fourthCardY = useTransform(scrollY, [(3 * containerHeight) / 4, containerHeight], [650, 200]);

  // Adjust zIndex based on scroll position to make each new card overlap the previous one
  const firstCardZ = useTransform(scrollY, [0, containerHeight / 4], [1, 0]);
  const secondCardZ = useTransform(scrollY, [containerHeight / 4, containerHeight / 2], [2, 1]);
  const thirdCardZ = useTransform(scrollY, [containerHeight / 2, (3 * containerHeight) / 4], [3, 2]);
  const fourthCardZ = useTransform(scrollY, [(3 * containerHeight) / 4, containerHeight], [4, 3]);

  return (
    <div
      className="relative flex flex-col items-center bg-white"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Inner Container */}
        <div style={{ height: "300vh", position: "relative" }}>
          {/* Sticky Container */}
          <div className="sticky top-0 w-full h-screen flex items-center justify-center">
            
            {/* First Card - Anonymous Posting */}
            <motion.div
              className="absolute w-[90vw] md:w-[70vw] max-w-[1000px] h-[50vh] bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-lg border border-gray-300 flex flex-col justify-between px-10 py-14"
              style={{ y: firstCardY, zIndex: firstCardZ }}
            >
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Anonymous Posting</h3>
                <p className="text-md md:text-lg text-gray-600">
                  Engage with a community of peers, ask questions, and find support—all while keeping your identity private. This feature ensures that you can freely connect and discuss without revealing personal information.
                </p>
                <p className="text-md md:text-lg text-gray-600 mt-2">
                  Find like-minded individuals, share insights, or seek advice in a safe and open environment.
                </p>
              </div>
            </motion.div>

            {/* Second Card - Marketplace */}
            <motion.div
              className="absolute w-[90vw] md:w-[70vw] max-w-[1000px] h-[50vh] bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-lg border border-gray-300 flex flex-col justify-between px-10 py-14"
              style={{ y: secondCardY, zIndex: secondCardZ }}
            >
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Marketplace</h3>
                <p className="text-md md:text-lg text-gray-600">
                  A dynamic platform where you can buy, sell, or rent items with ease. Browse a wide range of products from books to furniture, and enjoy a secure transaction process.
                </p>
                <p className="text-md md:text-lg text-gray-600 mt-2">
                  Our user-friendly interface makes it simple to list and discover items while keeping you connected with trusted community members.
                </p>
              </div>
            </motion.div>

            {/* Third Card - Job Posting */}
            <motion.div
              className="absolute w-[90vw] md:w-[70vw] max-w-[1000px] h-[50vh] bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-lg border border-gray-300 flex flex-col justify-between px-10 py-14"
              style={{ y: thirdCardY, zIndex: thirdCardZ }}
            >
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Job Posting</h3>
                <p className="text-md md:text-lg text-gray-600">
                  Post job opportunities or find gigs that fit your schedule, from tutoring to personal errands. This feature empowers you to offer or receive assistance on your own terms.
                </p>
                <p className="text-md md:text-lg text-gray-600 mt-2">
                  Connect with those looking for specific skills or offer your services, creating mutually beneficial work opportunities within the community.
                </p>
              </div>
            </motion.div>

            {/* Fourth Card - Community Events */}
            <motion.div
              className="absolute w-[90vw] md:w-[70vw] max-w-[1000px] h-[50vh] bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl shadow-lg border border-gray-300 flex flex-col justify-between px-10 py-14"
              style={{ y: fourthCardY, zIndex: fourthCardZ }}
            >
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Community Events</h3>
                <p className="text-md md:text-lg text-gray-600">
                  Discover and organize events within your community. From study groups to local meetups, this feature keeps you engaged with the latest happenings.
                </p>
                <p className="text-md md:text-lg text-gray-600 mt-2">
                  Stay connected with people who share your interests and passions, and build meaningful relationships in real life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardScrollSection;
