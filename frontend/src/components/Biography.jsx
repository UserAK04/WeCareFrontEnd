const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to WeCare, a cutting-edge solution dedicated to transforming healthcare administration. Our mission is to streamline hospital operations, enhance patient care, and improve overall healthcare efficiency through innovative technology.</p>

          <p>Founded by a team of healthcare and IT professionals, WeCare addresses the complex needs of modern hospitals and clinics. We understand that efficient management is critical to providing quality patient care, and our system is designed to support every aspect of hospital administration, from patient records and appointment scheduling to billing and inventory management.</p>

          <p> Our user-friendly platform offers seamless integration, ensuring that healthcare providers can focus on what matters most: their patients. With robust security measures in place, we prioritize the confidentiality and integrity of patient data.</p>

          <p>At WeCare, we are committed to continuous improvement and innovation. We stay ahead of industry trends and incorporate the latest advancements in technology to provide our clients with the best possible tools for managing their healthcare facilities.</p>

          <p>Join us in our journey to revolutionize healthcare management. Together, we can create a more efficient, effective, and patient-centered healthcare system.</p>
        </div>
      </div >
    </>
  );
};

export default Biography;
