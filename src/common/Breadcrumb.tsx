import { Link } from "react-router-dom";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
  subtitlelink?: string;
  subtitlelinktitle?: string;
}


export default function Breadcrumb({ title, subtitle, subtitlelink, subtitlelinktitle }: BreadcrumbProps) {
  return (
    <section className="section-breadcrumb">
      {/* <!-- Breadcrumb Background --> */}
      <div className="bg-black">
        {/* <!-- Breadcrumb Space --> */}
        <div className="breadcrumb-space">
          {/* <!-- Section Container --> */}
          <div className="container">
            <div className="breadcrumb-block">
              <h1>{title}</h1>
              {/* <!-- Breadcrumb Nav --> */}
              <ul className="breadcrumb-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {subtitlelink && subtitlelinktitle && (
                  <li>
                    <Link to={subtitlelink}>{subtitlelinktitle}</Link>
                  </li>
                )}
                <li>{subtitle}</li>
              </ul>
              {/* <!-- Breadcrumb Nav --> */}
            </div>
          </div>
          {/* <!-- Section Container --> */}
        </div>
        {/* <!-- Breadcrumb Space --> */}
      </div>
      {/* <!-- Breadcrumb Background --> */}
    </section>
  )
}
