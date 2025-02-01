const Caraousel = () => {
  return (
    <div className="flex overflow-x-hidden space-x-14 group">
      <div className="flex space-x-28 p-4 animate-loop-scroll group-hover:paused">
        <img src="/logos/angular.png" className="max-w-none" alt="angular" />
        <img src="/logos/flutter.png" className="max-w-none" alt="flutter" />
        <img src="/logos/jquery.png" className="max-w-none" alt="jquery" />
        <img src="/logos/js.png" className="max-w-none" alt="js" />
        <img src="/logos/mysql.png" className="max-w-none" alt="mysql" />
        <img src="/logos/nextjs.png" className="max-w-none" alt="nextjs" />
        <img src="/logos/nodejs.png" className="max-w-none" alt="nodejs" />
      </div>
      <div className="flex space-x-28 p-4 animate-loop-scroll group-hover:paused" aria-hidden = "true">
        <img src="/logos/angular.png" className="max-w-none" alt="angular" />
        <img src="/logos/flutter.png" className="max-w-none" alt="flutter" />
        <img src="/logos/jquery.png" className="max-w-none" alt="jquery" />
        <img src="/logos/js.png" className="max-w-none" alt="js" />
        <img src="/logos/mysql.png" className="max-w-none" alt="mysql" />
        <img src="/logos/nextjs.png" className="max-w-none" alt="nextjs" />
        <img src="/logos/nodejs.png" className="max-w-none" alt="nodejs" />
      </div>
    </div>
  );
}

export default Caraousel