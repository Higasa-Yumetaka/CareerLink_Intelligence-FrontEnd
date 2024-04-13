import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { ChinaMapData } from "./ChinaMapData";

export const ChinaMap = ({
                      option,
                      width = "100%",
                      height = "100%",
                  }) => {
    const ref = useRef(null);
    let mapInstance;

    const renderMap = () => {
        if (ref.current) {
            const renderedMapInstance = echarts.getInstanceByDom(ref.current);
            if (renderedMapInstance) {
                mapInstance = renderedMapInstance;
            } else {
                mapInstance = echarts.init(ref.current);
            }
            mapInstance.setOption(option);
        }
    };

    useEffect(() => {
        echarts.registerMap("china", ChinaMapData);
        renderMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.onresize = function () {
            // 调用 echarts实例上 resize 方法
            mapInstance?.resize();
        };
        return () => {
            // 销毁实例，销毁后实例无法再被使用。
            mapInstance && mapInstance.dispose();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div ref={ref} style={{ width: width, height: height }} />;
};

