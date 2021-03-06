import React from 'react';
import './Footer.scss';

const footerIcons = [
  {
    label: 'Website',
    icon: 'bi bi-globe',
    link: 'http://www.ashleyrosephotographs.com',
  },
  {
    label: 'Facebook',
    icon: 'bi bi-facebook',
    link: 'http://www.facebook.com/Ashleyrosephotographs/',
  },
  {
    label: 'Instagram',
    icon: 'bi bi-instagram',
    link: 'http://www.instagram.com/ashleyrosephotographs/',
  },
];

export default function Footer() {
  return (
    <footer className="bg-light p-3 p-md-4 text-center text-sm-end">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <p className="mb-3">Photos courtesy of Ashley Rose Photography</p>
            <div className="p-0 mb-3">
              {
            footerIcons.map((footerIcon) => (
              <a href={footerIcon.link} target="_blank" rel="noopener noreferrer" aria-label={footerIcon.label} key={footerIcon.label}>
                <i className={`${footerIcon.icon} text-body`} />
              </a>
            ))
          }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
