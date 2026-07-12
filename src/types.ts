export type FieldType='title'|'date'|'startTime'|'endTime'|'location'
export type Box={x:number;y:number;width:number;height:number}
export type OcrWord={id:string;text:string;confidence:number;box:Box;fontSize:number}
export type Candidate={id:string;value:string;confidence:number;wordIds:string[];reason:string}
export type EventDraft={title:string;date:string;startTime:string;endTime:string;location:string;address:string;notes:string}
export type CandidateMap=Record<FieldType,Candidate[]>
export type HistoryRecord={id?:number;createdAt:string;sourceName:string;imageBlob:Blob;imageUrl?:string;ocrWords:OcrWord[];candidates:CandidateMap;final:EventDraft;corrections:Partial<Record<keyof EventDraft,{from:string;to:string}>>}
