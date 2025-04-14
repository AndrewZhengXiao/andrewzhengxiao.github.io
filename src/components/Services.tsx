
import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Service
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              サービス
            </h2>
          </FadeIn>
        </div>
        
        <div id="career-consulting" className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20">
          <FadeIn delay={200} id="corporate-service">
            <Card className="overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">企業様へ</h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-2 md:mb-3">幅広い求職者様の対応領域</h4>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              様々なサービスが複雑化する現代においてそのポジションにマッチした人材を採用する必要があります。 
              弊社ではエンジニアのオープンデータを保有してスカウトをかけたり、海外の学校と連携しグローバルな人材を紹介する等幅広く対応可能です。
              </p>
              <p className="text-sm md:text-base text-gray-600">
              これまで上場企業や中小企業のクライアントからのご依頼もいただいております。 
              </p>
            </Card>
          </FadeIn>
          
          <FadeIn delay={300} id="job-seeker-service">
            <Card className="overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">求職者様へ</h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-2 md:mb-3">求人数の担保</h4>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              業界内での広範なネットワークを活かし、現在約8万件の求人情報を取り揃えています。求職者の皆様にとって、選択肢が多いことは非常に重要です。
              私たちは、あなたのスキルや希望に合った多様な求人を提供することで、最適な職場環境を見つけるお手伝いをします。
              </p>
              <p className="text-sm md:text-base text-gray-600">
              あなたの理想のキャリアを、私たちの豊富な求人情報とともに実現しましょう。まずはお気軽にご相談ください。 
              </p>
            </Card>
          </FadeIn>
        </div>
        
        <div id="global-talent-connect" className="mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">グローバルタレントコネクト</h3>
              <p className="text-sm md:text-base text-gray-600">
                国内外の優秀な人材と企業をつなぐ、Hustarのグローバル人材紹介サービスです。
                多様な職種と人材特性に対応し、最適なマッチングを実現します。
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={500}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-2">SKILLS</span>
                  <div>対応職種</div>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">IT</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">ITエンジニア</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">SE、AIエンジニア、PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">製造</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">製造・技術職</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">生産技術者、品質管理、機械設計</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">営業</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">営業</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">新卒（バイリンガル）、中途</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">経営</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">経営層</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">CEO、CMO等</p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
            
            <FadeIn delay={600}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-2">TALENTS</span>
                  <div>ターゲット人材の属性</div>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">国籍</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">多様な国籍</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">中国、アメリカ、スペイン、ロシア、インドなど（日本人求職者もいらっしゃいます）</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">学歴</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">高学歴</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">4年制大学卒業以上、専門分野の修士・博士も多数</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">言語</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">語学力</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">日本語：N3〜N1レベル、英語：ビジネスレベル</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3 shadow-md transform transition-transform hover:scale-105">
                      <span className="text-white font-semibold">経験</span>
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-1">実務経験</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg inline-block">3年以上、日系企業での勤務経験者も多数</p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
        
        <div id="additional-options" className="mb-12 md:mb-20">
          <FadeIn delay={700}>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">追加オプション</h3>
              <p className="text-sm md:text-base text-gray-600">
                お客様のニーズに合わせた追加サービスをご用意しております。
                各種手続きから研修まで、幅広くサポートいたします。
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn delay={800}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold">1</span>
                    </div>
                    <span>在留資格申請オプション</span>
                  </div>
                </h3>
                <ul className="space-y-2 pl-14">
                  <li className="text-sm md:text-base text-gray-600">・各種申請書類の作成・代行</li>
                  <li className="text-sm md:text-base text-gray-600">・就労ビザ取得サポート</li>
                  <li className="text-sm md:text-base text-gray-600">・入管への申請・交渉</li>
                  <li className="text-sm md:text-base text-gray-600">・申請進捗状況レポート</li>
                </ul>
              </Card>
            </FadeIn>
            
            <FadeIn delay={900}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold">2</span>
                    </div>
                    <span>入国オプション</span>
                  </div>
                </h3>
                <ul className="space-y-2 pl-14">
                  <li className="text-sm md:text-base text-gray-600">・住居手配・契約</li>
                  <li className="text-sm md:text-base text-gray-600">・銀行口座開設</li>
                  <li className="text-sm md:text-base text-gray-600">・携帯電話契約サポート</li>
                  <li className="text-sm md:text-base text-gray-600">・役所・保険手続き</li>
                </ul>
              </Card>
            </FadeIn>
            
            <FadeIn delay={1000}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold">3</span>
                    </div>
                    <span>日本語・マナー研修オプション</span>
                  </div>
                </h3>
                <ul className="space-y-2 pl-14">
                  <li className="text-sm md:text-base text-gray-600">・ビジネス日本語研修</li>
                  <li className="text-sm md:text-base text-gray-600">・日本の生活マナー講座</li>
                  <li className="text-sm md:text-base text-gray-600">・業界用語・専門用語研修</li>
                  <li className="text-sm md:text-base text-gray-600">・ビジネスマナー講座</li>
                </ul>
              </Card>
            </FadeIn>
            
            <FadeIn delay={1100}>
              <Card className="overflow-hidden h-full shadow-xl hover:shadow-lg transition-all duration-300 p-5 md:p-8 bg-white border border-blue-50 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white font-semibold">4</span>
                    </div>
                    <span>入社前後フォローオプション</span>
                  </div>
                </h3>
                <ul className="space-y-2 pl-14">
                  <li className="text-sm md:text-base text-gray-600">・採用企業との定期面談</li>
                  <li className="text-sm md:text-base text-gray-600">・人材本人との定期面談</li>
                  <li className="text-sm md:text-base text-gray-600">・緊急時対応窓口</li>
                  <li className="text-sm md:text-base text-gray-600">・キャリアアドバイス</li>
                </ul>
              </Card>
            </FadeIn>
          </div>
          
          <FadeIn delay={1200}>
            <div className="mt-8 bg-blue-700 text-white py-3 px-4 rounded-lg text-center font-medium">
              すべてのサポートは、日本語・英語・中国語に対応しています
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
