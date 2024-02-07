import { Link } from "react-router-dom";

interface PostListProps{
    hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true}){
    return (
    <>
    {hasNavigation && (
        <div className="post__navigation">
            <div className="post__navigation--active">전체</div>
            <div>나의 글</div>
        </div>
    )}
    <div className="post__list">
    {[...Array(10)].map((e, index) => (
        <div key={index} className="post__box">
            <Link to={`posts/${index}`}>
                <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">nahyun park</div>
                    <div className="post__date">2024.02.06</div>
                </div>
                <div className="post__title">게시글 {index}</div>
                <div className="post__text">
                ◎ 해외 증시
                강한 지표. 연준 인사들 발언에 금리 상승하며 하락
                10년물 금리 4.16%까지 오르며 부담으로 작용
                다만 애플, 엔비디아가 오르며 하락폭은 제한
                파월의 발언은 이날까지 주목 받은
                금리인하에 대해 신중할 것이라는 취지 발언
                닐 카시카리, 돌아오는 데이터 보며 판단
                오스틴 굴스비, 진전된 지표들 더 나오는지 봐야
                5월 인하 확률도 낮아지고 금리는 추가로 상승
                바클레이즈, 골드만삭스 등 금리인하 전망 늦춰
                맥쿼리, 고용, 소비 강세가 디스인플레 되돌리는지 봐야
                LPL리서치, 가격 상승은 홍해 변수로 배송비 증가 때문
                홍해 상황 개선되면 가격 안정 기대
                다만 인하 전망을 늦추는 재료들이 악재는 아니라는 주장도
                지표 호조는 결과적으로 기업들 실적이 좋다는 의미
                투자자들이 반드시 악재로 반응할 사안은 아니라는 것
                기업 EPS 추정치는 올해 244달러, 내년 275달러
                금리가 아닌 실적 자체를 봐야 한다는 것
                ISM서비스업지수 53.4로 예상 52 상회
                고용에 이어 지표 강하게 나오며 금리 자극  
                전통적으로 2월은 9, 8월 다음으로 약한 달
                이 점을 의식한 투자자들이 소극적이라는 주장도 
                테슬라, 파이퍼 샌들러에서 목표가 295→225달러로 하향
                독일의 SAP가 테슬라 차량 더 구매 안 한다는 보도도
                차가격 수시로 바뀌고 배송 일정도 못 맞추는 점이 이유
                엔비디아는 골드만삭스에서 목표가 800달러로 상향
                AI 관련 사업 증권가 전망 훨씬 상회할 것
                맥도날드 실적 우려에 하락하며 다우 지수 발목
                보잉은 737맥스 이슈로 추가 하락
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">수정</div>
                </div>
            </Link>
        </div>
    ))}
</div>
</>
)}