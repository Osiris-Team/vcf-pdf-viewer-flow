      // In the past blob builder existed, but now we use Blob
      // We expect this script tag to exist before
      const blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text\\/js-worker']"),
          (script) => script.textContent,
        ),
        { type: "text/javascript" },
      );

      // Creating a new document.worker property containing all our "text/js-worker" scripts.
      const worker = new Worker(window.URL.createObjectURL(blob), {
                type: "module"
              });