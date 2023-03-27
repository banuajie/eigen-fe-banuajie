import "./style.css";
import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=abb48c4721d94fd0b4366bef9aefd361")
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <section id="article-list">
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
                            <p className="list-header">Article List</p>
                            <p style={{ marginTop: "10px", fontSize: "20px" }}>Berikut adalah kumpulan artikel berita dari berbagai sumber :</p>
                            <hr style={{ color: "lightgrey" }} />

                            <ul>
                                {articles.map((article, index) => {
                                    return (
                                        <li key={index} style={{ marginTop: "16px", marginBottom: "16px" }}>
                                            <div className="article-content">
                                                <div style={{ marginRight: "20px" }}>
                                                    <img src={article.urlToImage} alt={article.title} style={{ maxWidth: "500px" }} />
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: "32px", color: "black", marginBottom: "20px" }}>{article.title}</p>
                                                    <time>
                                                        <p className="article-time" style={{ marginBottom: "20px", color: "gray", fontSize: "18px" }}>
                                                            {new Date(article.publishedAt).toLocaleDateString()}
                                                        </p>
                                                    </time>
                                                    <p style={{ fontSize: "18px", marginBottom: "20px" }}>{article.content}</p>
                                                    <p style={{ fontSize: "18px" }}>
                                                        <span>Media Source : </span>
                                                        <Link to={article.url} target="_blank">
                                                            <span>{article.source.name}</span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                            <hr style={{ color: "lightgrey", marginTop: "16px" }} />
                                        </li>
                                    );
                                })}
                            </ul>
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

export default ArticleList;
