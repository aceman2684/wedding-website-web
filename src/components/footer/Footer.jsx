import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="bg-light mt-5 p-3 p-md-4 text-center text-sm-end">
      <div className="container">
        <p className="mb-3">Photos courtesy of Ashley Rose Photography</p>
        <div className="p-0 mb-3">
          <a href="http://www.ashleyrosephotographs.com" target="_blank" rel="noopener noreferrer" aria-label="Website"><i className="bi bi-globe text-body" /></a>
          <a href="http://www.facebook.com/Ashleyrosephotographs/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="ms-3"><i className="bi bi-facebook text-body" /></a>
          <a href="http://www.instagram.com/ashleyrosephotographs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ms-3"><i className="bi bi-instagram text-body" /></a>
        </div>
      </div>
    </footer>
  );
}
