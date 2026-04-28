import React from 'react';
import { FiX } from 'react-icons/fi';
export const Pill=({children,type='green'})=><span className={`pill ${type}`}>● {children}</span>;
export const Card=({children,className=''})=><section className={`card ${className}`}>{children}</section>;
export const Field=({label,placeholder,type='text',value})=><label className="field"><span>{label}</span><input type={type} placeholder={placeholder} defaultValue={value||''}/></label>;
export function Modal({title,onClose,children,footer}){return <div className="overlay"><div className="modal"><div className="modal-head"><h2>{title}</h2><button onClick={onClose}><FiX/></button></div><div className="modal-body">{children}</div>{footer}</div></div>}
