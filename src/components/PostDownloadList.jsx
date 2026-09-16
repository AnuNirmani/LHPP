import { useEffect, useState } from 'react';
import { fetchPostsByCategoryTypeId } from '../api/postsApi';

/**
 * Fetches posts for a category_type_id and renders them using either the
 * video-one/download-one card markup, or (variant="simple") a plain
 * name-only link list that downloads the PDF on click.
 */
export default function PostDownloadList({ categoryTypeId, variant = 'cards' }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError(null);

    fetchPostsByCategoryTypeId(categoryTypeId)
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [categoryTypeId]);

  if (loading) return null;
  if (error) return null;
  if (posts.length === 0) return null;

  if (variant === 'simple') {
    return (
      <ul className="link-list" style={{ paddingTop: '20px' }}>
        {posts.map((post) => (
          <li key={post.id}>
            {post.pdf ? (
              <a href={post.pdf} download target="_blank" rel="noopener noreferrer">{post.title}</a>
            ) : (
              <span>{post.title}</span>
            )}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div style={{ paddingTop: '50px' }}>
      {posts.map((post) => (
        <div className="elementor-element elementor-widget elementor-widget-dexen_download" key={post.id}>
          <div className="elementor-widget-container">
            <section className="sec-pad sec-pad-content-margin-50 pt-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="video-one hvr-float-shadow content-margin-50">
                      {post.photo && <img alt={post.title} decoding="async" src={post.photo} />}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="download-one content-margin-50">
                      <h3 className="download-one__title">{post.title}</h3>
                      <p className="download-one__text"></p>
                      <div className="download-one__option">
                        <ul className="download-one__feature">
                          <li className="download-one__feature-item"><span>Click to download --&gt;</span></li>
                        </ul>
                        <div className="download-one__links">
                          <div className="download-one__links-row">
                            {post.pdf && (
                              <a className="elementor-repeater-item-72eef36 download-one__link" href={post.pdf} target="_blank" rel="noopener noreferrer">
                                Download <i className="fa fa-angle-down"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
