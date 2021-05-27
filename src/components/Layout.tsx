import React from 'react';
import Navbar from './Navbar';
import Helmet from 'react-helmet';
import '../styles/global.scss';

interface ILayout {
    children?: JSX.Element;
}
export default function Layout({ children }: ILayout) {
    return (
        <>
            <Helmet title="Hello" titleTemplate={`%s - Gatsby JS`} />
            <div className="layout">
                <Navbar />
                <div className="content">
                    {/* content for each page */}
                    {children}
                </div>
                <footer>
                    <p>Copyright {new Date().getFullYear()} Ezygroup Innovation Co., Ltd. all right reserved</p>
                </footer>
            </div>
        </>
    );
}