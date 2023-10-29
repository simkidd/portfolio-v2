import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/buttons/Button';
import { projects } from '../../data/projects.data';
import './project.scss';
import Tilt from 'react-parallax-tilt';

const Project: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const itemId = id ? parseInt(id, 10) : undefined;
  const item = projects.find((project) => project.id == itemId);


  return (
    <div className='project'>
      <div className="main__layout">
        {item ? (
          <div className="project__wrap">
            <div>
              <button
                className='go__back'
                onClick={() => navigate(-1)}
              >
                <AiOutlineArrowLeft />
              </button>
            </div>
            <div className="project__inner">
              <div className="project__inner__left">
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.8}
                  glareColor="#ffffff"
                  glarePosition="bottom"
                  transitionSpeed={3000}
                >
                  <div className='img__wrapper'>
                    <img src={item?.image} alt="" loading='lazy' />
                  </div>
                </Tilt>
                <ul className='project__tags'>
                  {item?.tags.map((tag) => (
                    <li className='tag'>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className='project__inner__right'>
                <h1 className='project__title'>{item?.title}</h1>
                <div className='project__buttons'>
                  {item?.isPublic && (
                    <Button>
                      <a href='' target='_blank'>
                        Code
                        <BsCodeSlash style={{ marginLeft: "0.75rem" }} size={16} />
                      </a>
                    </Button>
                  )}
                  <Button>
                    <a href='' target='_blank'>
                      Go Live
                      <FiExternalLink style={{ marginLeft: "0.75rem" }} size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Project not found</div>
        )}
      </div>
    </div>
  )
}

export default Project