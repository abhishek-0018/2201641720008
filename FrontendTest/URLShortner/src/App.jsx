import { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [allUrls, setAllUrls] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || {};
    setAllUrls(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(allUrls));
  }, [allUrls]);

  const generateShortCode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleShorten = () => {
    if (!url.trim()) return;

    const code = generateShortCode();
    const newUrls = { ...allUrls, [code]: url };
    setAllUrls(newUrls);
    setShortUrl(`${window.location.origin}/short/${code}`);
    setUrl("");
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/short/")) {
      const code = path.split("/short/")[1];
      const stored = JSON.parse(localStorage.getItem("urls")) || {};
      if (stored[code]) {
        window.location.href = stored[code];
      }
    }
  }, []);

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{ textAlign: "center", marginTop: "50px", marginLeft:"500px" }}>
      <h2>URL Shortener</h2>
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleShorten} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleShorten} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleShorten} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleShorten} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />
      <button onClick={handleShorten} style={{ marginLeft: "10px", padding: "8px" }}>
        Shorten
      </button>
      </div>
      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Shortened URL:</p>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
