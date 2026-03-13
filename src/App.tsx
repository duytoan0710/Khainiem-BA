/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Layers, 
  Network, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Info,
  Target,
  Users,
  Cpu,
  Sparkles,
  ChevronRight,
  Zap
} from 'lucide-react';

// --- Data ---

const LESSONS = [
  {
    id: 'welcome',
    title: 'Chào mừng bạn đến với Thế giới BA',
    subtitle: 'Hành trình khám phá nghề Phân tích Nghiệp vụ theo chuẩn quốc tế BABOK® v3',
    icon: <Sparkles className="text-accent" />,
    content: (
      <div className="space-y-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-slate-700 font-medium leading-relaxed">
            Chào bạn! Nếu bạn đang tò mò về nghề <span className="font-bold text-accent">Business Analyst (BA)</span> nhưng cảm thấy những thuật ngữ chuyên ngành quá khô khan, thì đây chính là nơi dành cho bạn.
          </p>
          <p className="mt-6 text-slate-500 italic text-lg">
            Chúng ta sẽ cùng nhau tìm hiểu một cách nhẹ nhàng, dễ hiểu nhất về "người kết nối" tuyệt vời này.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {[
            { title: 'Dễ hiểu', desc: 'Ngôn ngữ bình dân, ví dụ thực tế từ cuộc sống hàng ngày.', icon: <Zap size={20} /> },
            { title: 'Chuẩn xác', desc: 'Dựa trên BABOK® v3 - "Kinh thánh" của giới BA toàn cầu.', icon: <CheckCircle2 size={20} /> },
            { title: 'Trực quan', desc: 'Sơ đồ và hình ảnh giúp bạn "thấy" được quy trình.', icon: <Layers size={20} /> }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white rounded-[32px] border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform shadow-inner border border-slate-100">
                {item.icon}
              </div>
              <h4 className="font-serif font-bold text-deep text-xl mb-4">{item.title}</h4>
              <p className="text-base text-slate-600 leading-relaxed flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'definition',
    title: 'BA là gì? (Theo chuẩn BABOK®)',
    subtitle: 'Định nghĩa chính thống từ "Kinh thánh" của nghề BA',
    icon: <BookOpen className="text-accent" />,
    content: (
      <div className="space-y-12">
        <div className="relative p-12 bg-deep text-white rounded-[40px] shadow-2xl shadow-deep/30 overflow-hidden border-4 border-accent/20">
          <div className="absolute -top-12 -right-12 p-4 opacity-[0.05] rotate-12 text-accent">
            <BookOpen size={320} />
          </div>
          <p className="text-2xl md:text-3xl font-serif italic leading-relaxed relative z-10">
            "Business Analysis là việc <span className="text-accent font-bold">tạo điều kiện cho sự thay đổi</span> trong một tổ chức bằng cách <span className="text-accent font-bold">xác định các nhu cầu</span> và <span className="text-accent font-bold">đề xuất các giải pháp</span> mang lại giá trị cho các bên liên quan."
          </p>
          <div className="mt-12 flex items-center gap-6 text-[12px] font-bold text-white/40 uppercase tracking-[0.4em]">
            <div className="w-20 h-px bg-white/20" />
            <span>BABOK® Guide v3 Standard</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-10 bg-white rounded-[32px] border-2 border-slate-100 flex gap-8 items-start h-full shadow-xl hover:border-accent/40 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 shadow-inner border border-slate-100">
              <Target size={32} className="text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-deep text-2xl mb-4 tracking-tight">Xác định nhu cầu</h4>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed text-justify">
                <p>
                  <span className="text-accent font-bold uppercase text-xs tracking-widest block mb-1">Bối cảnh:</span>
                  Một ngân hàng muốn xây dựng thêm nhiều phòng giao dịch vật lý để xử lý lượng hồ sơ vay vốn đang bị quá tải.
                </p>
                <p>
                  <span className="text-deep font-bold uppercase text-xs tracking-widest block mb-1">Phân tích BA:</span>
                  Dữ liệu cho thấy 60% thời gian của nhân viên bị lãng phí vào việc nhập liệu thủ công và đối soát giấy tờ rời rạc.
                </p>
                <p>
                  <span className="text-deep font-bold uppercase text-xs tracking-widest block mb-1">Nhu cầu thực sự:</span>
                  Cần một cơ chế **"Số hóa quy trình thẩm định"** để tăng năng suất xử lý trên mỗi nhân sự hiện có, thay vì mở rộng hạ tầng.
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-white rounded-[40px] border border-slate-100 flex flex-col md:flex-row gap-8 items-start h-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 shadow-inner border border-amber-100 group-hover:scale-110 transition-transform">
              <Sparkles size={32} className="text-amber-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-deep text-2xl mb-4 tracking-tight">Đề xuất giải pháp</h4>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed text-justify">
                <p>
                  <span className="text-amber-500 font-bold uppercase text-xs tracking-widest block mb-1">Giải pháp đề xuất:</span>
                  Triển khai hệ thống **eKYC (Định danh điện tử)** kết hợp với công nghệ **OCR (Nhận dạng ký tự quang học)** để tự động trích xuất dữ liệu.
                </p>
                <p>
                  <span className="text-deep font-bold uppercase text-xs tracking-widest block mb-1">Thực thi:</span>
                  Tích hợp luồng phê duyệt tự động dựa trên bộ quy tắc (Rule-based) cho các khoản vay nhỏ, giúp rút ngắn thời gian phản hồi từ 3 ngày xuống còn 15 phút.
                </p>
                <p className="text-deep font-medium italic pt-2 border-t border-slate-100">
                  → Giá trị: Tăng 300% hiệu suất xử lý mà không cần tuyển thêm nhân sự hay mở thêm mặt bằng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'itba',
    title: 'BA và IT BA: Sự chuyên biệt hóa',
    subtitle: 'IT BA là một nhánh chuyên sâu của Business Analysis',
    icon: <Cpu className="text-accent" />,
    content: (
      <div className="space-y-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-700 font-medium leading-relaxed text-lg">
            Khi một vấn đề kinh doanh nảy sinh, một trong những hướng giải quyết hiệu quả là <span className="text-deep font-bold inline-block">tối ưu hóa quy trình</span> vận hành. 
          </p>
          <div className="flex items-center justify-center gap-4 my-4 text-slate-400">
            <div className="h-px w-12 bg-slate-200" />
            <ChevronRight size={20} />
            <div className="h-px w-12 bg-slate-200" />
          </div>
          <p className="text-slate-700 font-medium leading-relaxed text-lg">
            Và để hiện thực hóa sự tối ưu đó, việc <span className="text-accent font-bold text-xl inline-block">xây dựng phần mềm</span> là một phương pháp thực thi mạnh mẽ. Đây chính là lúc <span className="text-deep font-bold underline decoration-accent decoration-2 underline-offset-4 inline-block">IT BA</span> vào cuộc.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="p-12 bg-white rounded-[48px] border-2 border-slate-100 shadow-xl flex flex-col h-full hover:border-accent/40 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10" />
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner">
                <Users className="text-slate-500" size={32} />
              </div>
              <h4 className="font-serif font-bold text-3xl text-deep">BA (Core Focus)</h4>
            </div>
            <div className="space-y-8 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-indigo-500 rounded-full" />
                  <span className="text-[13px] text-indigo-600 uppercase font-black tracking-[0.15em] block">Trọng tâm</span>
                </div>
                <p className="text-lg text-slate-700 font-medium">Xác định vấn đề & Chiến lược tối ưu.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-indigo-500 rounded-full" />
                  <span className="text-[13px] text-indigo-600 uppercase font-black tracking-[0.15em] block">Cách tiếp cận</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Phân tích điểm nghẽn (Bottlenecks).</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Đề xuất thay đổi mô hình vận hành.</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-indigo-500 rounded-full" />
                <span className="text-[13px] text-indigo-600 uppercase font-black tracking-[0.15em] block">Tư duy BA (Tìm "Gốc")</span>
              </div>
              <p className="text-base text-deep font-bold italic bg-slate-50 p-4 rounded-2xl border border-slate-100">
                "Quy trình hiện tại đang quá chậm do phải chờ ký duyệt giấy. Chúng ta cần một giải pháp để phê duyệt tức thì nhằm giảm 50% thời gian chờ."
              </p>
            </div>
          </div>
          
          <div className="p-12 bg-deep text-white rounded-[48px] shadow-2xl shadow-deep/30 flex flex-col h-full border-2 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10" />
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shadow-inner">
                <Cpu className="text-accent" size={32} />
              </div>
              <h4 className="font-serif font-bold text-3xl text-white">IT BA (Perspective)</h4>
            </div>
            <div className="space-y-8 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-accent rounded-full" />
                  <span className="text-[13px] text-accent uppercase font-black tracking-[0.15em] block">Trọng tâm</span>
                </div>
                <p className="text-lg text-white/90 font-medium">Tối ưu quy trình bằng Công nghệ.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-accent rounded-full" />
                  <span className="text-[13px] text-accent uppercase font-black tracking-[0.15em] block">Cách tiếp cận</span>
                </div>
                <ul className="text-sm text-white/70 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /> Chuyển hóa quy trình thành Logic phần mềm.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/40" /> Thiết kế luồng dữ liệu tự động hóa.</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-accent rounded-full" />
                <span className="text-[13px] text-accent uppercase font-black tracking-[0.15em] block">Tư duy IT BA (Tìm "Cách")</span>
              </div>
              <p className="text-base text-accent font-bold italic bg-white/5 p-4 rounded-2xl border border-white/10">
                "Để hiện thực hóa việc phê duyệt tức thì, tôi sẽ thiết kế tính năng Mobile Approval với hệ thống Push Notification và chữ ký số."
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'bridge',
    title: 'Vai trò "Cầu Nối" Diệu Kỳ',
    subtitle: 'Làm sao để hai thế giới hiểu nhau?',
    icon: <Network className="text-accent" />,
    content: (
      <div className="space-y-12">
        <p className="text-slate-700 font-medium leading-relaxed text-center max-w-2xl mx-auto text-lg">
          BA không chỉ là người truyền tin, mà đóng vai trò như một <span className="text-deep font-bold">Kiến trúc sư giải pháp</span>. Họ phân tích, đánh giá và định hướng để biến những mong muốn mơ hồ thành một sản phẩm thực sự có giá trị.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch bg-white rounded-[56px] border-2 border-slate-200 overflow-hidden shadow-2xl">
          <div className="text-center p-14 bg-slate-50 border-b md:border-b-0 md:border-r-2 border-slate-200 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-xl mb-8 border border-slate-100">
              <Users size={40} className="text-deep" />
            </div>
            <p className="font-serif font-bold text-2xl text-deep mb-3">Khách hàng</p>
            <p className="text-sm text-slate-500 font-medium italic leading-relaxed px-4">"Tôi muốn hệ thống phải thật thông minh, tự biết khách thích gì..."</p>
          </div>
          
          <div className="flex flex-col items-center justify-center py-16 px-10 bg-white relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
              <Network size={280} className="text-accent" />
            </div>
            <div className="px-10 py-4 bg-deep text-accent rounded-full text-[14px] font-black shadow-2xl shadow-deep/40 mb-10 uppercase tracking-[0.4em] relative z-10 border-2 border-accent/30">
              BA / ITBA
            </div>
            <div className="flex items-center w-full gap-6 relative z-10">
              <div className="h-0.5 flex-1 bg-slate-200" />
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center shadow-inner border-2 border-slate-100">
                <Network size={32} className="text-accent animate-pulse" />
              </div>
              <div className="h-0.5 flex-1 bg-slate-200" />
            </div>
            <p className="text-[12px] text-deep font-black uppercase tracking-[0.2em] mt-10 relative z-10 text-center">Kiến trúc sư giải pháp</p>
          </div>
 
          <div className="text-center p-14 bg-slate-50 border-t md:border-t-0 md:border-l-2 border-slate-200 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-xl mb-8 border border-slate-100">
              <Cpu size={40} className="text-deep" />
            </div>
            <p className="font-serif font-bold text-2xl text-deep mb-3">Đội Kỹ thuật</p>
            <p className="text-sm text-slate-500 font-medium italic leading-relaxed px-4">"Cần thuật toán Recommendation Engine, tích hợp AI Model..."</p>
          </div>
        </div>
 
        <div className="p-10 bg-white rounded-[40px] border-2 border-accent/20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <h5 className="text-deep font-bold text-2xl mb-8 flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Lightbulb className="text-accent" size={24} />
            </div>
            <span>Case Study: Quy trình tư duy của một BA thực thụ</span>
          </h5>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* Cột trái: Yêu cầu ban đầu */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-slate-50 p-8 rounded-3xl shadow-inner border border-slate-200 h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg mb-6">
                  <Users size={14} />
                  <span className="text-[11px] font-black uppercase tracking-wider">Khách hàng yêu cầu</span>
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed mb-6">"Tôi muốn app tự động gợi ý món ăn cho khách như cách Netflix gợi ý phim."</p>
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-500">
                  <p className="font-bold text-deep mb-2">Dữ liệu thực tế:</p>
                  Tỷ lệ thoát trang tại màn hình Menu là 40%. Khách hàng thường bỏ cuộc vì Menu quá dài (hơn 100 món).
                </div>
              </div>
            </div>

            {/* Cột phải: Luồng tư duy của BA */}
            <div className="md:col-span-8 bg-deep p-8 rounded-[32px] shadow-2xl border border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-lg mb-8 border border-accent/30">
                <Target size={14} />
                <span className="text-[11px] font-black uppercase tracking-wider">Tiến trình phân tích & định hướng của BA</span>
              </div>
              
              <div className="space-y-8">
                {/* Bước 1 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent font-black text-sm">01</div>
                  <div>
                    <p className="text-accent font-bold text-lg mb-2">Phân tích sâu (Deep Analysis)</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Netflix gợi ý dựa trên sở thích lâu dài, nhưng <span className="text-white font-bold">Ăn uống là nhu cầu tức thời</span>. 
                      BA nhận thấy: Khách sẽ không muốn ăn Phở vào 2 giờ chiều nắng nóng dù họ rất thích Phở. 
                      <br/>
                      <span className="text-accent/80 italic">→ Kết luận: Gợi ý phải dựa trên "Ngữ cảnh" (Thời gian + Thời tiết) mới thực sự hiệu quả.</span>
                    </p>
                  </div>
                </div>

                {/* Bước 2 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent font-black text-sm">02</div>
                  <div>
                    <p className="text-accent font-bold text-lg mb-2">Định hướng sản phẩm (Product Direction)</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Làm AI ngay sẽ tốn 6 tháng và chi phí cực lớn. 
                      BA định hướng: <span className="text-white font-bold">MVP (Sản phẩm khả thi tối thiểu)</span> sẽ dùng bộ quy tắc (Rule-based). 
                      Sáng: Hiện món ăn sáng. Mưa: Hiện món nước/nóng. Nắng: Hiện đồ uống giải nhiệt.
                      <br/>
                      <span className="text-accent/80 italic">→ Kết luận: Giải quyết bài toán kinh doanh ngay lập tức với chi phí thấp nhất.</span>
                    </p>
                  </div>
                </div>

                {/* Bước 3 */}
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent font-black text-sm">03</div>
                  <div>
                    <p className="text-accent font-bold text-lg mb-2">Chuyển hóa kỹ thuật (Technical Translation)</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Để làm được điều trên, BA yêu cầu Dev: 
                      1. Tích hợp API thời tiết. 
                      2. Gắn tag "Nóng/Lạnh" cho món ăn. 
                      3. Thiết kế bảng Logic: If (Weather == Rain) then Show (Hot_Dishes).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'summary',
    title: 'Lời kết cho bài học đầu tiên',
    subtitle: 'Bạn đã sẵn sàng để trở thành một BA?',
    icon: <Sparkles className="text-accent" />,
    content: (
      <div className="space-y-10">
        <div className="p-12 bg-white rounded-[56px] border-2 border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10" />
          <h4 className="font-serif font-bold text-4xl text-accent mb-14 text-center tracking-tight">Tóm tắt bài học:</h4>
          <div className="grid grid-cols-1 gap-8">
            {[
              { t: 'BA là người tạo ra thay đổi', d: 'Không chỉ là ghi chép yêu cầu, mà là thấu hiểu vấn đề để mang lại giá trị thực tế.' },
              { t: 'ITBA là cầu nối công nghệ', d: 'Chuyên gia trong việc "phiên dịch" nhu cầu kinh doanh thành các giải pháp kỹ thuật khả thi.' },
              { t: 'Kỹ năng thấu hiểu là cốt lõi', d: 'BA giỏi là người biết đặt câu hỏi đúng để tìm ra "Nhu cầu" thực sự ẩn sau "Mong muốn" của khách hàng.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-10 items-center p-10 rounded-[40px] bg-slate-50 border-2 border-slate-100 hover:bg-white hover:shadow-2xl transition-all hover:border-accent/30 group">
                <div className="w-16 h-16 rounded-2xl bg-deep flex items-center justify-center shrink-0 text-accent font-black text-2xl shadow-2xl shadow-deep/30 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-deep text-2xl mb-2">{item.t}</p>
                  <p className="text-base text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center py-16">
          <p className="text-slate-400 italic font-serif text-4xl max-w-3xl mx-auto leading-tight opacity-80">
            "Nghề BA không chỉ là một công việc, đó là một nghệ thuật của sự thấu hiểu và kết nối."
          </p>
        </div>
      </div>
    )
  }
];

// --- Components ---

const ProgressBar = ({ current, total }: { current: number, total: number }) => (
  <div className="w-full h-3 bg-slate-300 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] border border-slate-400/40">
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${(current / total) * 100}%` }}
      className="h-full bg-accent shadow-[0_0_25px_rgba(197,160,89,0.9)] relative"
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  </div>
);

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-warm-bg flex flex-col font-sans selection:bg-olive/10 selection:text-olive antialiased">
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 z-[70]">
        <motion.div 
          className="h-full bg-accent shadow-[0_0_10px_rgba(197,160,89,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / LESSONS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      {/* Top Navigation */}
      <header className="relative z-50 px-6 py-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between bg-white rounded-[32px] px-10 py-7 border-2 border-slate-200 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.2)]">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-deep rounded-2xl flex items-center justify-center text-accent shadow-2xl shadow-deep/50">
              <Network size={32} />
            </div>
            <div>
              <h1 className="font-serif font-bold text-3xl text-deep leading-none tracking-tight">BA Hub</h1>
              <span className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-2.5 block">Education Series</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-16">
            <div className="flex flex-col items-end">
              <span className="text-[12px] font-bold text-deep uppercase tracking-widest mb-3 opacity-80">Tiến độ bài học</span>
              <div className="flex items-center gap-6">
                <div className="w-64">
                  <ProgressBar current={step + 1} total={LESSONS.length} />
                </div>
                <span className="text-base font-black text-accent tabular-nums">{Math.round(((step + 1) / LESSONS.length) * 100)}%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
             <div className="px-7 py-3.5 bg-slate-100 rounded-2xl border-2 border-slate-200 shadow-inner">
               <span className="text-base font-black text-deep tabular-nums">{step + 1} <span className="text-slate-400 mx-2.5">/</span> {LESSONS.length}</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 md:py-16 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-olive/5 rounded-full blur-[120px]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Header Section */}
            <div className="mb-16 text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-accent/20"
              >
                <Sparkles size={12} />
                <span>Bài học {step + 1}</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep leading-[1.1] mb-6 tracking-tight">
                {LESSONS[step].title}
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-medium italic max-w-2xl mx-auto leading-relaxed">
                {LESSONS[step].subtitle}
              </p>
            </div>

            {/* Content Section */}
            <div className="min-h-[450px]">
              {LESSONS[step].content}
            </div>

            {/* Navigation Section */}
            <div className="mt-24 flex items-center justify-between border-t border-slate-200 pt-12">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`group flex items-center gap-4 px-8 py-4 rounded-full font-bold text-sm transition-all ${
                  step === 0 
                  ? 'opacity-0 pointer-events-none' 
                  : 'text-slate-500 hover:text-deep bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                <ArrowLeft size={18} />
                <span>Quay lại</span>
              </button>

              {step < LESSONS.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="group flex items-center gap-8 bg-deep text-white px-12 py-5 rounded-full font-bold text-sm hover:bg-olive transition-all shadow-xl shadow-deep/20 active:scale-95"
                >
                  <span>Tiếp tục bài học</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={() => setStep(0)}
                  className="flex items-center gap-6 bg-accent text-white px-12 py-5 rounded-full font-bold text-sm hover:bg-deep transition-all shadow-xl shadow-accent/20 active:scale-95"
                >
                  <Sparkles size={18} />
                  <span>Học lại từ đầu</span>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white/30">
        <div className="max-w-5xl mx-auto border-t border-slate-200/60 pt-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-start gap-6 max-w-md">
            <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shrink-0">
              <Info size={18} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-loose mb-2">
                Thông tin chuyên môn
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nội dung được biên soạn dựa trên tiêu chuẩn <strong>BABOK® Guide v3</strong> của IIBA®. Đây là tài liệu tham khảo chính thống cho cộng đồng BA toàn cầu.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">© 2026 BA Knowledge Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Hệ thống đang hoạt động</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
