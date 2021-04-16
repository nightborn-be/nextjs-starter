import { useQuery } from "react-query";
import Service from "../services/Service";

export function useSample(sampleId: string) {
    return useQuery(
        ["samlpe", { sampleId }],
        () =>
            Service.
                api
                .get("sample")
                .then(
                    (res) => res.data
                ),
        { enabled: !!sampleId }
    );
}