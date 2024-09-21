export const works = [
  {
    id: 1,
    jobTitle: "Server Administrator",
    companyName: "知能メディア処理研究室",
    date: "2023.01-現在",
    modalContent:
      "研究室のGPUサーバーの管理や障害対応を行っています。オンプレミスのサーバーの運用を行う中で、Linuxの基本的なコマンドや、Dockerについての知識を深めることができました。",
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=linux,docker",
  },
  {
    id: 2,
    jobTitle: "Software Engineer (Frontend)",
    companyName: "株式会社いい生活",
    date: "2023.09-2023.09",
    modalContent:
      "React、TypeScript、いい生活の物件情報のAPIを用いてアプリを作成した。その際、チームに分かれてスクラム開発を行った。本インターンでは要件定義をし、Figmaで画面設計をするといった工程も経験しました。実装ではGitLabを用いてチケット駆動開発を行い、ソフトウェア開発の流れについて理解することができました。チームで協力して1つのソフトウェアを作る難しさと、要件通りにソフトウェアが動いた時の嬉しさの両方を学びました。",
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=react,typescript",
    link: "https://note.e-seikatsu.info/n/nea225701a76c",
  },
  {
    id: 3,
    jobTitle: "Research Internship",
    companyName: "DFKI(ドイツ人工知能研究センター)",
    date: "2024.02-2024.03",
    modalContent:
      "DFKI(ドイツ人工知能研究センター)にResearch Internshipとして留学し、医療AIの研究を医学部と情報系の学生からなるグループで行いました。具体的には、医療画像における説明可能なAIの研究を行いました。DFKIでは、この分野を研究している現地の研究者とディスカッションすることで、説明可能なAIについての理解を深めていきました。そして、最終のプレゼンテーションに間に合わせるために役割を分担して精度評価の実験を行い、留学の成果について発表することができました。この経験を通じて、スケジュールや役割分担のマネジメントの重要性を認識しました。期間が決まっている状況では、各自が力を発揮できるような環境を整えるために、先に計画を立ててから動き出すことが必要だと学びました。また、発表が終わった時の達成感からチームでプロジェクトに取り組むことのやりがいを感じました。",
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=python,tensorflow,pytorch,docker",
    imageUrl: "/images/IMG_8798.jpg",
    link: "https://www.omu.ac.jp/info/news/entry-10852.html",
  },
  {
    id: 4,
    jobTitle: "MLOps Engineer",
    companyName: "株式会社フューチャー",
    date: "2024.04-現在",
    modalContent: "MLOpsエンジニアとして、機",
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=python,docker,aws,azure",
  },
  {
    id: 5,
    jobTitle: "Machine Learning Engineer",
    companyName: "NPO法人サイエンス・アクセシビリティネット",
    date: "2024.04-現在",
    modalContent: `背景・目的: 
      ・視覚障害者、読字障害者など、読むことに困難がある方々に音声付き電子図書を提供する

      課題:
      ・既存のOCRの技術では、表やセルが多い場合や、ルビが振られている場合など、正確にテキストを抽出できない
      ・中学、高校の教科書には表やセルが多く、正確にテキストを抽出できないため、抽出したテキストをもとに音声付き電子図書を作成することが難しい

      課題解決に向けた取り組み:
      ・深層学習(物体検出)を用いて、教科書のPDFのレイアウト解析をまず行うことで、表やセルの場所を検出し、OCRでテキストを抽出しやすくする
      ・表やセルの場所が正確にアノテーションされている教科書や試験の画像データを用いて、物体検出のモデルを学習する
      ・オブジェクトストレージ(Wasabi)にアップロードされたPDFファイルをダウンロードし、学習したモデルを用いてレイアウト解析を行うシステムの運用も行う
      ・2人で開発に取り組んでおり、学習フローの改善や、ドキュメントの作成も行っている
      
      使用技術、ツール: 
      ・Python, TensorFlow, PyTorch, Detectron2(物体検出ライブラリ), Docker, Wasabi, Git, GitHub
      `,

    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=python,tensorflow,pytorch,docker",
  },
  {
    id: 6,
    jobTitle: "Software Engineer (Frontend)",
    companyName: "株式会社Affectify",
    date: "2024.06-2024.07",
    modalContent: `大阪公立大学の学生・教職員が利用できるAIサービスのポータルサイト PortalAI for OMUというアプリケーションの開発に取り組みました。その中でもアプリケーションの改善に取り組み、主にチャットの出力内容のパラメータを調整できる機能の追加を行いました。実装した機能が実際にリリースされて学生に利用されることで、自分の開発した機能が実際に身近で使われることのやりがいを感じました`,
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=nextjs,typescript,mongodb",
  },
  {
    id: 7,
    jobTitle: "Software Engineer (Backend)",
    companyName: "株式会社Finatext",
    date: "2024.08-2024.08",
    modalContent:
      "証券取引システムについて、与えられた要件から適切なアーキテクチャをチームで構築するという内容でインターンシップを行いました。具体的に与えられた要件は、高い可用性、ユーザーが50万人で高トラフィック、運用、監視も行うというもので、それを元にAWSサービスを選定しました。チームで相談してECS、Fargate、RDS、SQS、AWS Lambda、CloudWatchなどのサービスを選定し、証券の注文を受け取るAPI、LambdaはGoを用いました。その結果、要件を満たすアーキテクチャを構築することができました。最終日にはそのアーキテクチャをエンジニア、AWSの方々の前で発表し、そのアーキテクチャに対してレビューをいただき、AWSを用いたシステムのアーキテクチャについて深く学ぶことができました。",
    techStack: "https://skillicons.dev/icons?theme=dark&perline=10&i=go,aws",
  },
  {
    id: 8,
    jobTitle: "Application Engineer",
    companyName: "楽天グループ株式会社",
    date: "2024.09-2024.09",
    modalContent: `期間: 1週間

      背景・目的: 
      ・日本の防災、減災の推進のために楽天のサービスを活用したソリューションを開発する。

      使用技術、ツール: 
      ・Next.js, TypeScript, Python, FastAPI, SQLAlchemy, SQLite, Git, GitHub

      内容・役割:
      ・ハッカソン型のインターンシップで、4人でチーム開発
      ・解決したい課題: 防災に関して、備え方がわからない人が多いという課題
      ・ターゲットユーザー: 災害に備えるために何をすれば良いかわからない人
      ・課題の解決方法: 防災に関するチェックリストの回答状況に応じて防災に関するTipsを画面に表示することで、ユーザーが何を備えれば良いのかわかるようにした。例えば、食料などが備蓄できていないと回答した人には楽天市場のAPIを活用して楽天の商品を表示することで、購入を促すようにした。
      ・役割: 開発のリーダーを務め、必要最低限の機能からまずは実装するようにした。フロントエンド、バックエンドの開発を行った。
      
      結果: 
      ・最終日までにチームで考えた要件を満たしたアプリを完成させ、作成したアプリに関して英語でプレゼンを行い、フィードバックをいただいた。

      学び: チームでの開発において、役割をうまく分担して、全員が力を発揮できるようにすることの重要性を学んだ。解決したい課題が明確だと開発の方針も明確になり、効率的に開発を進めることができることを学んだ。`,
    techStack:
      "https://skillicons.dev/icons?theme=dark&perline=10&i=nextjs,typescript,python,fastapi,sqlite",
  },
];
