

const Container = ({children}) => {
    return (
        <div className="xl:px-16 lg:px-12 md:px-10 sm:px-5 w-full h-full">
          {children}
        </div>
    );
};

export default Container;