import BackToTop from "../common/BackToTop";

 


const Wrapper = ({ children }: { children: React.ReactNode }) => {

 
	return (
		<>
			{children}  
      <BackToTop />
		</>
	);
};

export default Wrapper;
