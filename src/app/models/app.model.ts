
interface IEventBase {
  name: string;
  eventDate: Date;
  createdDate: Date;
}

interface ICallParticipant {
  email: string;
}

interface IMeetingParticipant {
  name: string;
}

export interface ICall extends IEventBase {
  participants: ICallParticipant[];
}

export interface IMeeting extends IEventBase {
  address: string;
  participants: IMeetingParticipant[];
}


export type TEvent = ICall | IMeeting;
