import imgBanner from '../../assets/banner.png'


function Banner () {
    const bannerStyle = {
        backgroundColor: '#141F37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0'
    }

     const imgStyle = {
        maxWidth: '100%',
        height: 'auto'
    }

    return (
        <div style={bannerStyle}>
            <img src={imgBanner} alt="banner" style={imgStyle}></img>
        </div>
    );
}

export default Banner;

