export enum EventType {
  CALL = 'Call',
  MEETING = 'Meeting'
}

interface IEventBase {
  id: string;
  type: EventType;
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

export interface IForm {
  getForm: () => void;
}
