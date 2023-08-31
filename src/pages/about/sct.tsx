import { FC } from 'react';

import Layout from '@/components/layouts/baseLayout';

export const sct: FC = () => {
  return (
    <Layout pageTitle="特商法">
      <div
        id="container"
        className="my-32 space-y-12 px-6 desktop:px-12 max-w-screen-desktop"
      >
        <h2 className="text-center desktop:text-left">
          特定商取引法に基づく表記
        </h2>
        <div className="space-y-4">
          <h3>販売業者の名称</h3>
          <p>shiftbase Inc.</p>
        </div>
        <div className="space-y-4">
          <h3>所在地</h3>
          <p>
            〒160-0011 <br />
            東京都新宿区若葉1-7-15
          </p>
        </div>
        <div className="space-y-4">
          <h3>メールアドレス</h3>
          <p>gm[at]shiftbase[dot]xyz</p>
        </div>
        <div className="space-y-4">
          <h3>電話番号</h3>
          <p>
            03-6824-0470 <br />
            受付時間: 10:00-17:00（土日祝を除く）
          </p>
        </div>
        <div className="space-y-4">
          <h3>運営統括責任者</h3>
          <p>志村侑紀</p>
        </div>
        <div className="space-y-4">
          <h3>販売価格</h3>
          <p>各商品ごとに表示</p>
        </div>
        <div className="space-y-4">
          <h3>追加手数料等の追加料金</h3>
          <p>不要</p>
        </div>
        <div className="space-y-4">
          <h3>受け付け可能な決済手段</h3>
          <p>クレジットカード払い（VISA / MasterCard）</p>
        </div>

        <div className="space-y-4">
          <h3>決済期間</h3>
          <p>
            購入手続き完了時に課金され､お客様の契約に基づいた引き落とし日にお支払い
          </p>
        </div>
        <div className="space-y-4">
          <h3>引渡時期</h3>
          <p>原則として商品購入手続き完了後に利用開始となります</p>
        </div>
        <div className="space-y-4">
          <h3>交換および返品</h3>
          <p>商品の特性上、返品は承っておりません</p>
        </div>
      </div>
    </Layout>
  );
};

export default sct;
