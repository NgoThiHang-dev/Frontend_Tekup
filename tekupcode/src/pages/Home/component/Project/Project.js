import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import './Project.scss'
import image1 from "../../../../assets/images/image-1.png";
import image2 from "../../../../assets/images/image-2.png";
import image3 from "../../../../assets/images/image-3.png";
import image4 from "../../../../assets/images/image-4.png";
import image5 from "../../../../assets/images/image-5.png";
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className="project">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4 wow fadeInLeft" data-wow-duration="1.5s">
                    <Link href="#" className="project-link project-card">
                        <div className="project-item">
                            <img src={image1} alt="" className="project-item_image" />
                            <div className="project-item_body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="project-item_body-name">TOI 3D Customize E-commerce</h6>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4 wow fadeInLeft" data-wow-duration="1.5s">
                    <Link href="#" className="project-link">
                        <div className="project-item">
                            <img src={image2} alt="" className="project-item_image" />
                            <div className="project-item_body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="project-item_body-name">E-learning – Internal training platform</h6>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4 wow fadeInLeft" data-wow-duration="1.5s">
                    <Link href="#" className="project-link">
                        <div className="project-item">
                            <img src={image3} alt="" className="project-item_image" />
                            <div className="project-item_body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="project-item_body-name">Summer 21 Cosmetic E-commerce Platform</h6>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4 wow fadeInLeft" data-wow-duration="1.5s">
                    <Link href="#" className="project-link">
                        <div className="project-item">
                            <img src={image4} alt="" className="project-item_image" />
                            <div className="project-item_body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="project-item_body-name">Kiva – Ambition to digital transformation in the brokerage assiduity</h6>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4 wow fadeInLeft" data-wow-duration="1.5s">
                    <Link href="#" className="project-link">
                        <div className="project-item">
                            <img src={image5} alt="" className="project-item_image" />
                            <div className="project-item_body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="project-item_body-name">Boxgo – Professional Warehouse Management</h6>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project