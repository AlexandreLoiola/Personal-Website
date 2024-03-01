import React, { useEffect, useState } from "react";
import {
  Container,
  StyledCategoriesContainer,
  StyledContainerPosts,
  StyledPost,
  StyledTagCategory,
  StyledTitleName,
} from "./styles";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

interface ICategory {
  id: number;
  name: string;
}

interface IPost {
  id: number;
  title: { rendered: string };
  featured_media: number;
  cover_image?: string;
  slug: string;
  short_description: string;
  long_description: string;
  galery_images: string;
  link_source_code: string;
  link_documentation: string;
  presentation_video: string;
  technical_sheet: string;
}

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleFetchCategories();
    handleFetchPosts(7); // 7 é o número do post "Todos"
  }, []);

  const handleFetchCategories = async () => {
    await axios
      .get(
        "https://alexandreloiolabackend.galatus.com.br/wp-json/wp/v2/categories?per_page=100"
      )
      .then((response) => {
        const filteredData = response.data.filter(
          (category: ICategory) => category.name !== "Sem categoria"
        );
        const index = filteredData.findIndex(
          (category: ICategory) => category.name === "Todos"
        );
        if (index !== -1)
          filteredData.unshift(filteredData.splice(index, 1)[0]);
        setCategories(filteredData);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  };

  const handleFetchPosts = async (categoryId: number) => {
    await axios
      .get(
        `https://alexandreloiolabackend.galatus.com.br/wp-json/wp/v2/posts?categories=${categoryId}`
      )
      .then((response) => {
        const posts = response.data;
        console.log(response.data);
        const postsWithMedia = posts.map(async (post: IPost) => {
          const media = await axios.get(
            `https://alexandreloiolabackend.galatus.com.br/wp-json/wp/v2/media/${post.featured_media}`
          );
          return { ...post, cover_image: media.data.source_url };
        });
        Promise.all(postsWithMedia).then((completed) => {
          setPosts(completed);
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
      });
  };

  return (
    <Container>
      <StyledTitleName>{t("Portfolio")}</StyledTitleName>
      <StyledCategoriesContainer>
        {categories.map((category) => (
          <StyledTagCategory
            key={category.id}
            onClick={() => {
              handleFetchPosts(category.id);
            }}
          >
            {t(category.name)}
          </StyledTagCategory>
        ))}
      </StyledCategoriesContainer>
      <StyledContainerPosts>
        {posts.map((post) => (
          <StyledPost
            key={post.id}
            $imageurl={post.cover_image}
            $title={t(post.title.rendered)}
            onClick={() =>
              navigate(`/post/${post.slug}`, {
                state: {
                  title: post.title.rendered,
                  short_description: post.short_description,
                  long_description: post.long_description,
                  galery_images: post.galery_images,
                  link_source_code: post.link_source_code,
                  link_documentation: post.link_documentation,
                  presentation_video: post.presentation_video,
                  technical_sheet: post.technical_sheet
                },
              })
            }
          />
        ))}
      </StyledContainerPosts>
      <Footer style={{ position: "unset" }} />
    </Container>
  );
};
export default Portfolio;
