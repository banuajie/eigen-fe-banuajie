import "./style.css";
import React from "react";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const LandingHome = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <section id="landing-home">
                <Layout>
                    <Header className="header">
                        <div className="header-content">
                            <div className="header-left">
                                <div className="logo" />
                                <div>
                                    <Link to={"/"}>
                                        <span className="header-title">Article Website Nugraha Banuajie</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="header-right">
                                <Link to={"/"}>
                                    <span className="nav-home" style={{ color: "white" }}>
                                        Home
                                    </span>
                                </Link>
                                <Link to={"/article"}>
                                    <span className="nav-article" style={{ color: "white" }}>
                                        Article
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Header>
                    <Content
                        className="site-layout"
                        style={{
                            padding: "0 50px",
                            marginTop: "48px",
                            maxWidth: "1200px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <div
                            style={{
                                padding: 24,
                                minHeight: 380,
                                background: colorBgContainer,
                            }}
                        >
                            <p className="home-title">Welcome to Article Website Nugraha Banuajie</p>
                            <p className="home-desc">
                                Assalamualaikum Warahmatullahi Wabarakatuh, perkenalkan nama Saya Nugraha Banuajie, pertama-tama saya ucapkan terlebih dahulu terimakasih untuk PT. Eigen Tri Mathema yang telah memberikan saya kesempatan
                                untuk melakukan test awal untuk mengisi posisi sebagai Front-End Developer. Website ini saya buat untuk memenuhi syarat Technical Test di PT. Eigen Tri Mathema. Website ini dirancang menggunakan ReactJS dan
                                untuk styling nya menggunakan Ant Design. Berikut detail website yang saya buat :
                                <div style={{ marginTop: "20px" }}>
                                    <p>1. Website menggunakan ReactJS</p>
                                    <p>2. UI menggunakan Ant Design</p>
                                    <p>3. Source API mengambil dari "newsapi.org"</p>
                                    <p>4. Terdiri dari 2 page, Page Home dan Page Artikel</p>
                                    <p>
                                        5. Untuk konten artikel tidak saya masukan semua, hanya beberapa field tertentu yang bisa mewakilkan informasi mengenai isi dari sebuah konten berita antara lain (Gambar Artikel, Judul/Title, Tanggal
                                        Publish Artikel, Isi Konten Artikel dan Media Source)
                                    </p>
                                </div>
                            </p>
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: "center",
                        }}
                    >
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </section>
        </>
    );
};

export default LandingHome;
