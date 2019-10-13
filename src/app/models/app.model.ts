export enum EventType {
  NOOP =  '',
  CALL = 'Call',
  MEETING = 'Meeting'
}

interface IEventBase {
  id: string;
  type: EventType;
  name: string;
  eventDate: Date;
  eventTime: string;
  createdDate: Date;
}

export interface ICallParticipant {
  email: string;
}

export interface IMeetingParticipant {
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
  setValues: (event: TEvent) => void;
  getValues: () => AbstractFormData;
}

export interface AbstractFormData {
  [key: string]: any;
}
