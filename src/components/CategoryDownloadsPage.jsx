import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LegacyPage from './LegacyPage';
import PostDownloadList from './PostDownloadList';

/**
 * Wraps LegacyPage and portals a PostDownloadList into the `#doc-list-mount`
 * div left inside the page's static HTML, fetching posts for categoryTypeId.
 */
export default function CategoryDownloadsPage({ html, title, bodyClass, categoryTypeId, variant = 'cards' }) {
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    const findMount = () => {
      const el = document.getElementById('doc-list-mount');
      if (el) {
        setMountNode(el);
        return true;
      }
      return false;
    };

    if (!findMount()) {
      const interval = setInterval(() => {
        if (findMount()) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [html]);

  return (
    <>
      <LegacyPage html={html} title={title} bodyClass={bodyClass} isContact={false} />
      {mountNode && createPortal(<PostDownloadList categoryTypeId={categoryTypeId} variant={variant} />, mountNode)}
    </>
  );
}
