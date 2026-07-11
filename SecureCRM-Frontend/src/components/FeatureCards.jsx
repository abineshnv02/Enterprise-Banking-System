function FeatureCards() {

    const features = [

        "👥 Customer Management",

        "🤖 Gemini AI Summary",

        "📈 Analytics Dashboard",

        "📑 PDF Export",

        "📊 Excel Export",

        "🔐 JWT Authentication",

        "👨‍💼 RBAC",

        "🌐 REST APIs"

    ];

    return (

        <div className="container py-5">

            <div className="row">

                {features.map((feature, index) => (

                    <div
                        className="col-md-3 mb-4"
                        key={index}
                    >

                        <div
                            className="card shadow h-100"
                        >

                            <div
                                className="card-body text-center"
                            >

                                <h5>

                                    {feature}

                                </h5>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default FeatureCards;