'use client';

import { useState, useEffect } from 'react';
import AllCourses from './CourseData';
import Image from 'next/image';
import { FaArrowRight, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';


const Courses = () => {
	const [data, setData] = useState([]);
	const [course, setCourse] = useState([]);
	const [activeCourse, setActiveCourse] = useState('All');
	const [showThirdRow, setShowThirdRow] = useState(false);


	useEffect(() => {
		setData(AllCourses);
		setCourse([...new Set(AllCourses.map((item) => item.tag))]);
		setData(AllCourses)		 
	}, []);

	const course_filter = (itemData) => {
		const filterData = AllCourses.filter((item) => item.tag == itemData);
		setData(filterData);
		setActiveCourse(itemData);
	};



	const handleViewCoursesClick = () => {
		if (!showThirdRow) {
		  // If the third row is not visible, show it
		  setShowThirdRow(true);
		} else {
		  // If the third row is already visible, navigate to another page
		  useRouter.push('/next-page');
		}
	  };

	return (
		<div className='flex justify-center items-center'>
			<div className='mt-[5rem] xs:px-[0.75rem] lg:px-[5rem] w-[100vw] lg:ms-[-2rem]'>
				<h1 className='text-[#262626] text-[40px] font-[700] leading-[60px] font-inter text-center'>
					Featured Courses
				</h1>
				<h3 className='text-[#050505] text-[16px] font-[400] leading-[27px] font-inter text-center mt-[20px]'>
					Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
					elit id imperdiet et. Cras eu sit dignissim{' '}
					<br className='lg:block xs:hidden' /> lorem nibh et. Ac cum eget
					habitasse in velit fringilla feugiat senectus in.
				</h3>

				<div className='mt-[47px]'>
					<div>
						<ul className='flex lg:gap-5 xs:gap-2 lg:ms-[15rem]'>
							<li>
								<button
									onClick={() => {
										setData(AllCourses);
										setActiveCourse('All');
									}}
									className={`lg:w-[159px] xs:w-[90px] lg:p-[8px] xs:py-[8px] xs:px-[5px] text-center lg:text-[16px] xs:text-[12px] font-[600] leading-[24px] font-inter ${
										activeCourse === 'All'
											? 'bg-[#0A6A56] rounded-[10px] text-[#fff]'
											: 'text-[#000] rounded-[10px] bg-white border-[1px] border-solid border-[#4D4D4D4D]'
									}`}
								>
									All
								</button>
							</li>
							{course.map((item) => {
								return (
									<li key={item.id}>
										<button
											className={`lg:w-[159px] xs:w-[90px] lg:p-[8px] xs:py-[8px] xs:px-[5px] text-center lg:text-[16px] xs:text-[12px] font-[600] leading-[24px] font-inter ${
												activeCourse === item
													? 'bg-[#0A6A56] rounded-[10px] text-[#fff]'
													: 'text-[#000] rounded-[10px] bg-white border-[1px] border-solid border-[#4D4D4D4D]'
											}`}
											onClick={() => {
												course_filter(item);
											}}
										>
											{item}
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='flex flex-wrap gap-[30px] mt-[64px] lg:ms-[2rem]'>
						{
              data.slice(0, showThirdRow ? 6 : 6).map((item => {
                return (
                  <div>
                    <div
				          	key={item.id}
                      style={{boxShadow: `0px 0px 4px 2px rgba(0, 0, 0, 0.10)`}}
                      className='bg-[#fff] rounded-[8px] p-[10px]'
                    >
                      <Image
                        src={item.image}
                        width='340'
                        height='196'
                        loading='lazy'
                        alt=''
                      />
                      <h1 className='flex gap-[5px] items-center mt-[34px]'>
                        <Image
                          src='/assets/icons/play.svg'
                          width='24'
                          height='24'
                          alt=''
                        />
                        <span className='text-[#00000080] text-[12px] leading-[18px] font-[600] font-inter'>
                          {item.plays} Plays
                        </span>
                      </h1>
                      <h1 className='text-[#000] text-[20px] font-[700] leading-[30px] font-inter mt-[15px]'>
                        {item.heading}
                      </h1>
                      <div className='flex gap-[37px] mt-[20px]'>
                        <div className='flex gap-[10px] items-start'>
                          <h2 className='text-[#000] text-[12px] font-[700] leading-[18px] font-inter'>
                            {item.sellingPrice}
                          </h2>
                          <h2 className='text-[#0000004D] text-[12px] font-[700] leading-[18px] font-inter line-through'>
                            {item.costPrice}
                          </h2>
                        </div>
                        <div className='flex gap-[10px] items-start'>
                          <div className='rating-outer'>
                            <div
                              className='rating-inner'
                              style={{ width: `${(item.review / 5) * 100}%` }}
                            ></div>
                          </div>
                          <h2 className='text-[#80819A] text-[11px] font-[400] leading-[19.8px] font-inter'>
                            {item.review} Ratings
                          </h2>
                        </div>
                      </div>
                      <div className='bg-[#00000033] w-[330px] h-[1px] mt-[31px]' />
                      <div className='flex gap-[160px] items-start mt-[18px]'>
                        <div className=''>
                          <h2 className='text-[#00000080] text-[12px] font-[600] leading-[18px] font-inter flex  justify-center items-center gap-[10px]'>
                            <FaUserAlt className='text-[24px]' />
                            <span>{item.NumStudents} Students</span>
                          </h2>
                        </div>
                        <button className='bg-[#0A6A56] rounded-[4px] w-[70px] h-[30px] p-[5px] text-[#fff] text-[25px] font-[600] flex justify-center items-center'>
                          <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                );
				}))
            }

			{showThirdRow &&
						data.slice(6, 6).map((item) => (
							<div key={item.id}>
							   <Image
                        src={item.image}
                        width='340'
                        height='196'
                        loading='lazy'
                        alt=''
                      />
                      <h1 className='flex gap-[5px] items-center mt-[34px]'>
                        <Image
                          src='/assets/icons/play.svg'
                          width='24'
                          height='24'
                          alt=''
                        />
                        <span className='text-[#00000080] text-[12px] leading-[18px] font-[600] font-inter'>
                          {item.plays} Plays
                        </span>
                      </h1>
                      <h1 className='text-[#000] text-[20px] font-[700] leading-[30px] font-inter mt-[15px]'>
                        {item.heading}
                      </h1>
                      <div className='flex gap-[37px] mt-[20px]'>
                        <div className='flex gap-[10px] items-start'>
                          <h2 className='text-[#000] text-[12px] font-[700] leading-[18px] font-inter'>
                            {item.sellingPrice}
                          </h2>
                          <h2 className='text-[#0000004D] text-[12px] font-[700] leading-[18px] font-inter line-through'>
                            {item.costPrice}
                          </h2>
                        </div>
                        <div className='flex gap-[10px] items-start'>
                          <div className='rating-outer'>
                            <div
                              className='rating-inner'
                              style={{ width: `${(item.review / 5) * 100}%` }}
                            ></div>
                          </div>
                          <h2 className='text-[#80819A] text-[11px] font-[400] leading-[19.8px] font-inter'>
                            {item.review} Ratings
                          </h2>
                        </div>
                      </div>
                      <div className='bg-[#00000033] w-[330px] h-[1px] mt-[31px]' />
                      <div className='flex gap-[160px] items-start mt-[18px]'>
                        <div className=''>
                          <h2 className='text-[#00000080] text-[12px] font-[600] leading-[18px] font-inter flex  justify-center items-center gap-[10px]'>
                            <FaUserAlt className='text-[24px]' />
                            <span>{item.NumStudents} Students</span>
                          </h2>
                        </div>
                        <button className='bg-[#0A6A56] rounded-[4px] w-[70px] h-[30px] p-[5px] text-[#fff] text-[25px] font-[600] flex justify-center items-center'>
                          <FaArrowRight />
                        </button>
                      </div>
							</div>
						))}
					</div>
					<div className='flex justify-center items-center mt-[3rem]'>
          <button onClick={handleViewCoursesClick} className='flex justify-center items-center bg-[#086250] w-[172px] h-[40px] p-[10px] rounded-[8px] text-[#fff] text-[16px] font-[600]'>View More</button>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Courses;