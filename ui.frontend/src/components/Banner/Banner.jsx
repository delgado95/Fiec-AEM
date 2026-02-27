import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

export const Banner = (props) => {
    const { title, subtitle, bgImage, ctaLink, ctaLabel, align } = props;

    if (!title && !bgImage) return null;

    const bannerStyles = {
        container: {
            width: '100%',
            height: '500px',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: align, 
            color: '#fff',
            fontFamily: 'sans-serif'
        },
        content: {
            padding: '0 10%',
            maxWidth: '600px',
            textAlign: align === 'center' ? 'center' : 'left'
        },
        title: {
            fontSize: '3rem',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        },
        subtitle: {
            fontSize: '1.2rem',
            marginBottom: '2rem'
        },
        button: {
            padding: '12px 30px',
            backgroundColor: '#ff4b2b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: '0.3s'
        }
    };

    return (
        <section style={bannerStyles.container}>
            <div style={bannerStyles.content}>
                {title && <h1 style={bannerStyles.title}>{title}</h1>}
                {subtitle && <p style={bannerStyles.subtitle}>{subtitle}</p>}
                {ctaLink && ctaLabel && (
                    <a href={`${ctaLink}.html`} style={bannerStyles.button}>
                        {ctaLabel}
                    </a>
                )}
            </div>
        </section>
    );
};

export const BannerConfig = {
    emptyLabel: 'Banner: Configure a imagem e o título.',
    isEmpty: (props) => !props.title && !props.bgImage
};

