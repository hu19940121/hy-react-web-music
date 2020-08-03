import React, {memo} from 'react';
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format-utils";

import {
  RankingHeaderWrapper
} from './style';

export default memo(function HYRankingHeader() {
  // redux
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"]),
  }), shallowEqual);
  const topInfo = state.playList;

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <div className="operation">
          <a href="/abc" className="item sprite_button">
            <i className="icon favor-icon sprite_button">({topInfo.subscribedCount})</i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon share-icon sprite_button">({topInfo.shareCount})</i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon download-icon sprite_button">下载</i>
          </a>
          <a href="/abc" className="item sprite_button">
            <i className="icon comment-icon sprite_button">({topInfo.commentCount})</i>
          </a>
        </div>
      </div>
    </RankingHeaderWrapper>
  )
})
