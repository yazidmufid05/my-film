        import React from 'react';
        import styled from 'styled-components';

        const Container = (props) => {
            const {children} = props
            return (
                <ContainerStyle>
                <div className='container'>
                    {children}
                </div>
                </ContainerStyle>
            );
        }

        const ContainerStyle = styled.div`
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }
        `
        export default Container;