import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center mt-10 px-4">
            <div className="text-center w-full max-w-3xl mx-auto">
                <p className="text-2xl font-bold mb-8">What We Do</p>
                <div className="mt-2 h-1 w-24 bg-orange-500 mx-auto"></div>
                <div className="mt-6 text-gray-700 text-left font-thin">
                    <p>
                        <strong>
                            The AyurMahotsava is a platform established by Ayur Vaidya Foundation to propagate Ayurveda globally in its true sense. Ayur Vaidya Foundation is a registered Section 8 company under the Ministry of Corporate Affairs, Government of India, committed to promoting the ancient wisdom of Ayurveda and holistic wellness practices. As a non-profit organization, we strive to improve the overall health and lifestyle of the general public through the promotion of Ayurveda and its principles.Our company specializes in organizing large-scale expos and events dedicated to the Ayurveda fraternity. These expos serve as platforms for practitioners, researchers, and wellness enthusiasts to come together, share knowledge, and showcase products and services that align with Ayurveda’s rich heritage. Through these events, we aim to spread awareness, provide educational resources, and create a thriving community for Ayurveda professionals and consumers alike.
                        </strong>
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-left font-thin">
                    <div>
                        <h3 className="text-xl font-bold mb-4">01. <br></br>— Our Team</h3>
                        <p className='text-xs font-normal'>
                            At the heart of our initiatives is a team of experienced and knowledgeable Vaidya’s (Ayurvedic doctors) who are experts in various branches of Ayurveda. Our team plays a pivotal role in conducting health camps and wellness initiatives across various locations. These camps are designed to provide the general public with personalized consultations, lifestyle advice, and practical solutions to improve overall health. The health camps focus on preventive care, healthy living, and Ayurvedic remedies for common ailments, empowering individuals to take charge of their wellness
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">02.<br></br> — Our Mission</h3>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Promote Ayurveda:</span> To preserve, promote, and proliferate the principles of Ayurveda for better health and lifestyle.
                        </p>

                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Health and Wellness:</span> To conduct health camps and lifestyle programs that empower people to adopt natural and sustainable practices.
                        </p>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Community Building:</span>  To create a vibrant community of Ayurveda practitioners, wellness experts, and the public through expos and events.
                        </p>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Educational Outreach:</span> To increase awareness and educate the masses on the benefits of Ayurveda and holistic living for better health outcomes.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">03.<br></br> — Key Activities</h3>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Ayurveda Expos & Conferences:</span>  Organizing national and international expos focused on Ayurvedic products, services, and research. These expos bring together industry leaders, practitioners, and consumers.
                        </p>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Health Camps & Consultations:</span>  Offering free or affordable health check-ups and consultations, focusing on Ayurveda-based preventive and curative treatments for all age groups.
                        </p>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Workshops & Training:</span>  Conducting educational workshops and training programs on Ayurvedic practices, including diet, herbal treatments, and lifestyle management.
                        </p>
                        <p className='text-xs font-normal'>
                            <span className="underline text-orange-400">Public Awareness Campaigns:</span> Engaging in campaigns to spread awareness about the benefits of Ayurveda, emphasizing its role in modern-day healthcare.
                        </p>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 text-left font-thin mb-20">
                    <div></div> {/* Empty column */}
                    <div >
                        <h3 className="text-xl font-bold mb-4">04. <br></br>— Our Impact</h3>
                        <p className='text-xs font-normal'>
                            Through our initiatives, we have positively impacted thousands of lives by providing them access to affordable Ayurvedic healthcare, enhancing their lifestyle, and promoting a culture of preventive healthcare. Our expos have bridged the gap between Ayurvedic professionals and the general public, making Ayurveda more accessible and relevant in today’s world.
                        </p>
                    </div>
                    <div></div> {/* Empty column */}
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;
