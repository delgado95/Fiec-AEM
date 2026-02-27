import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

 const styles = {
    cardContainer: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        maxWidth: '350px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        transition: 'transform 0.2s'
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    },
    content: {
        padding: '16px'
    },
    title: {
        fontSize: '1.5rem',
        margin: '0 0 10px 0',
        color: '#333'
    },
    description: {
        fontSize: '1rem',
        color: '#666',
        lineHeight: '1.5',
        marginBottom: '20px'
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
};

export const CardEditConfig = {
    emptyLabel: 'Card Component: Clique para configurar o título e imagem.',
    isEmpty: (props) => !props.title && !props.imagePath
};

export const Card = (props) => {
    const { title, description, imagePath, linkTo } = props;

    if (CardEditConfig.isEmpty(props)) {
        return null; 
    }

    return (
        <div style={styles.cardContainer}>
            {imagePath && (
                <img 
                    src={imagePath} 
                    alt={title} 
                    style={styles.image} 
                />
            )}
            
            <div style={styles.content}>
                {title && <h2 style={styles.title}>{title}</h2>}
                
                {description && (
                    <p style={styles.description}>{description}</p>
                )}
                
                {linkTo && (
                    <a href={`${linkTo}.html`} style={styles.button}>
                        Ver detalhes
                    </a>
                )}
            </div>
        </div>
    );
};