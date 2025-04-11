import ContentLoader from 'react-content-loader';


const Shimmer = ({children,height,width}) => {
    return (
        <ContentLoader height={height} width={width} >
        {children}
      </ContentLoader>
    )
}

export default Shimmer;